# This file is used to upload PDF documents
# into Pinecone vectorstore index

# Only need to run this file once to upload documents

# We pass the stored vectordata with embeddings 
# to our LLM model in addition to our query 
# to find the most relevant chunks of the documents that match a potential
# answer to our query



from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import pinecone
from langchain.vectorstores.pinecone import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms.openai import OpenAI
from dotenv import load_dotenv

import pinecone
import os

load_dotenv()

llm = OpenAI()

pdfs = [
  # "pdfs/KennyGPT_001.pdf",
  "pdfs/KennyGPT_002.pdf"
]

files = []

for pdf in pdfs:
  loader = PyPDFLoader(pdf)
  document = loader.load()
  files.append(document)
  
text_splitter = RecursiveCharacterTextSplitter(
  chunk_size=500, chunk_overlap=0
)

chunked_files = []

for file in files:
  text = text_splitter.split_documents(file)
  chunked_files.append(text)
  # print(f"chunked_files length: {len(text)}")
    
embeddings = OpenAIEmbeddings()

pinecone.init(
  api_key=os.environ.get('PINECONE_API_KEY'),
  environment='gcp-starter',
)

index_name = 'chat-pdf-index'

# Upload PDF documents into Pinecone index via LangChain
# Only run this once to insert (already ran)
for chunks in chunked_files:
    Pinecone.from_texts(
      [chunk.page_content for chunk in chunks], 
      embedding=embeddings, 
      index_name=index_name
    )