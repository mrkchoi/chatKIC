from flask import Flask, Response, request
import uuid

app = Flask(__name__)

data = [
  {'id':1, 'sender': 'AI','content':'How can I help you today?'},
  {'id':2, 'sender': 'Human','content':'Tell me about Kenneth Choi'},
  {'id':3, 'sender': 'AI','content':f"Sure, Kenneth Choi is a software engineer with a passion for building products. \n\nDuring his time at Facebook, he designed, developed, and delivered new features for the enterprise procurement/supply chain software ecosystem, working closely with cross-functional teams to gather requirements, build internal tooling, and implement and test new features that enhanced the user experience.\n\nHe possesses a strong understanding of algorithms, data structures, and design patterns. He is proficient in JavaScript, React, Redux, PHP/Hack, Flow/Typescript, Ruby/Rails, Node.js, GraphQL, SQL, Git, HTML5, and CSS3. \n\nHe is also constantly expanding his skillset, currently learning Python, Langchain, Flask, and Next.js. Additionally, he is taking courses in statistics and linear algebra to prepare for future integration as a ML engineer. \n\nHe is ready to hit the ground running and I'm confident that he will make a valuable asset to the team. He looks forward to chatting and to learn more about any potential opportunities that could be a good fit."},
  ]

@app.get('/data')
def get_data():
  return {'data': data}


@app.post('/data')
def create_query():
  request_data = request.get_json()
  new_message = {
    'id': uuid.uuid4(),
    'sender': 'Human',
    'content': request_data['query']
  }
  
  print('new_message: ', new_message)
  data.append(new_message)
  print('data: ', data)
  return new_message, 201