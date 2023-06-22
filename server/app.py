from pydantic import BaseModel
import uvicorn
from fastapi import FastAPI
import os
from SECRETS import OPENAI_API_KEY
os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY
from langchain.document_loaders import TextLoader, DirectoryLoader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import ConversationalRetrievalChain
from langchain.text_splitter import CharacterTextSplitter
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)
loader = TextLoader('./data.txt').load()
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
documents = text_splitter.split_documents(loader)
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(documents, embeddings)
model = ChatOpenAI(max_tokens=800,temperature=0.0,streaming=True)
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
qa = ConversationalRetrievalChain.from_llm(model, vectorstore.as_retriever())
chat_history = []



class chatHistory(BaseModel):
    messages: list

app = FastAPI()
@app.post("/", status_code=200)
async def chat(payload:chatHistory):
    chat_history = [(req,res) for req,res in payload.messages]
    question = chat_history[-1][0]
    if len(chat_history) <= 1 or question == "":
        return "Type a message to start the conversation"
    reply = qa({"question": question,"chat_history": chat_history})['answer']
    return reply

@app.post("/chat", status_code=200)
async def sth(s:list):
    print(s)
    return 

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000,reload=True)
