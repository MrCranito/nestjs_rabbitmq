
### How to run

```bash
cd server_hibou
docker-compose up -d --build

docker exec --interactive --tty server_hibou bash
npm run start
````

open new terminal 

```bash
docker exec --interactive --tty notification_hibou bash
npm run start
```

### How to Test

OPEN POSTMAN 


```bash
Create a category 

==> POST  http://localhost:8080/category
body: { "name": "Tech" }


Create a task with linked category
 ==> POST  http://localhost:8080/task
 body: { "name" : "Faire le test du hibou", "category_id": "/!\ Mettre ici l'id récupérer par le précédent POST" }


Récuperer la todolist:
==> GET  http://localhost:8080/task


Vérifier dans le terminal de notification_hibou 

Ex: 

{
  message: 'ADD CATEGORY, [POST], effadddb-8df7-457d-ac22-e096fe63c95f'
}
{
    message: 'ADD TASK, [POST], 15933538-4fe7-4818-890d-380fa4cb58f9' 
}

```


