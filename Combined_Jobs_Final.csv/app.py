import streamlit as st
import pandas as pd
import pickle

df = pickle.load(open('df.pkl','rb'))
similarity = pickle.load(open('similarity.pkl','rb'))

def recommendation(title):
    idx = df[df['Title']==title].index[0]
    idx = df.index.get_loc(idx)
    distances= sorted(list(enumerate(similarity[idx])),reverse=True,key=lambda x:x[1])[1:20]

    jobs = []
    for i in distances:
        jobs.append(df.iloc[i[0]].Title)

    return jobs
# web app
st.title('Job Recommendation system')
title = st.selectbox('search job',df['Title'])

jobs = recommendation(title)

if jobs:
    st.write(jobs)