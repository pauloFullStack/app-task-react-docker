## Instalar as dependĂȘncias

```
cd client
```
```
npm install
```

## Criar a imagen node - docker

```
cd ..
```

```
sudo docker build -t node-v14 . 
```

## Execute o contĂȘiner do Docker

```
sudo docker-compose up -d
```

## Em seguida inicie o servidor JSON

```
cd client
```

```
npm run server
```