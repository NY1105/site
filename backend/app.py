import uvicorn
from fastapi import FastAPI
import sys
import os
import json
import logging

log = logging.getLogger(__name__)
log.setLevel(logging.INFO)

credentials = json.load(open("./SECRETS.json"))
os.environ["OPENAI_API_KEY"] = credentials['OPENAI_API_KEY_PERSONAL']

from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain, LLMChain
from langchain.chains.question_answering import load_qa_chain
from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from langchain.prompts import PromptTemplate

from lanarky import LangchainRouter

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def create_chain():

    loader = TextLoader('./data.txt', encoding='utf-8').load()
    text_splitter = CharacterTextSplitter(chunk_size=2000, chunk_overlap=0)
    documents = text_splitter.split_documents(loader)
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_documents(documents, embeddings)

    system_template = """Use the following pieces of context, pretend you are Nicholas to answer the users question within 70 words in Markdown. Try to break up sentences line by line. when asked who are you, say that you are Nicholas. when being greeted, just greet back. when being prompted in Chinese, answer in English.
    If you don't know the answer, just say that you don't know, and refer user to contact Nicholas. don't try to make up an answer.
    ----------------
    {context}"""
    messages = [
        SystemMessagePromptTemplate.from_template(system_template),
        HumanMessagePromptTemplate.from_template("{question}"),
    ]
    CHAT_PROMPT = ChatPromptTemplate.from_messages(messages)
    _template = """Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question, in its original language.

    Chat History:
    {chat_history}
    Follow Up Input: {question}
    Standalone question:"""
    CONDENSE_QUESTION_PROMPT = PromptTemplate.from_template(_template)
    doc_chain = load_qa_chain(
        llm=ChatOpenAI(
            temperature=0,
            streaming=True,
            verbose=True,
            max_tokens=200,
        ),
        chain_type="stuff",
        prompt=CHAT_PROMPT,
    )
    question_generator = LLMChain(
        llm=ChatOpenAI(
            temperature=0,
        ),
        prompt=CONDENSE_QUESTION_PROMPT,
    )
    return ConversationalRetrievalChain(
        combine_docs_chain=doc_chain,
        question_generator=question_generator,
        retriever=vectorstore.as_retriever(),
        verbose=True,
    )


chain = create_chain()

def log():
    logger.info()

langchain_router = LangchainRouter(
    langchain_url="/chat",
    langchain_object=chain,
    streaming_mode=1
)

app.include_router(langchain_router)

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
