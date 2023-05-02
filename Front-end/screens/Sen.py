from csv import writer
from flask import Flask, request
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.tree import plot_tree
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
from sklearn import metrics
dataset = pd.read_csv("D:/VS code Programs/IP/test/IP/assets/rdiseases.csv")
dataset.head()
symptoms = []
for col in dataset.columns[1:]:
    symptoms.append(dataset[col].unique())
unique = []
for row in symptoms:
    for symp in row:
        if (symp is not np.nan) and (symp is not np.nan):
            unique.append(symp.strip())
symp=set(unique)
symptoms=list(symp)
lis = [0.0] * 29
symp_dict = dict(zip(symptoms, lis))
new = []
for i in range(len(dataset)):
    row = dataset.iloc[i].values
    temp = dict(zip(symptoms, lis))
    for i in row:
        if i is not np.nan:
            temp[i.strip()] = 1.0
    new.append(temp)
processedData = pd.DataFrame(data=new)
processedData['disease'] = dataset['Disease']
processedData.fillna(value=0,inplace=True)
processedData.head()
df=pd.read_csv('D:/VS code Programs/IP/test/IP/assets/pre_processed.csv')
df.head()
df.isnull().sum()
df.head()
df.drop('Unnamed: 0',axis=1, inplace=True)
df.head()
X= df[symptoms]
y = df[["disease"]]
np.ravel(y)
X.shape
y.shape
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0,stratify=y)
tree = DecisionTreeClassifier()
hyperParam = [{'max_depth': list(range(1,4)), 'criterion': ["entropy","gini"]}]
model = GridSearchCV(tree, hyperParam, cv = 10, scoring='accuracy')
model.fit(X_train, y_train)
model = DecisionTreeClassifier(max_depth=3,criterion="entropy")
model.fit(X_train,y_train)
#print("Feature importances:\n{}".format(model.feature_importances_))
def plot_feature_importances(model):
    n_features = X_train.shape[1]
    plt.barh(range(n_features), model.feature_importances_, align='center')
    plt.yticks(np.arange(n_features), X_train.columns)
    plt.xlabel("Importance_of_the_feature")
    plt.ylabel("Feature")
plot_feature_importances(model)
plt.figure(figsize=(10,10))
plot_tree(model)
app = Flask(__name__)
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    print(response)
    return response

@app.route('/',methods=['POST'])
# Set up the SMTP server
def index():
    data = request.json['answers']
    if max([data])==0:
        return {'result':"Enter Valid input","Precaution":"NO Precaution","Diseases":"Enter Valid Input"}
    print(data)
    result = model.predict([data])
    print(result)

    with open("D:/VS code Programs/IP/test/IP/assets/symptom_precaution.csv",'r') as f:
        lines=f.readlines()
        for entry in lines:
            if result[0] in entry:
                pre=entry
                
    with open("D:/VS code Programs/IP/test/IP/assets/symptom_Description.csv",'r') as fl:
        line=fl.readlines()
        for entry in line:
            if result[0] in entry:
                dpre=entry
    return {'result':result.tolist(),"Precaution":pre,"Diseases":dpre}


if __name__ == '__main__':
    app.run(debug=True)

#java -jar bundletool-all-1.14.0.jar build-apks --mode=universal --bundle=application-d97acf58-3873-4129-a76e-329cdb99023d.aab --output=Respiratio.apks