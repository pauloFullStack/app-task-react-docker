## Criar a imagen node - docker

```
sudo docker build -t client ./client 
```

## Execute o contêiner do Docker

```
sudo docker-compose up -d
```

## Instalar as dependências

```
cd client
```
```
npm install
```

## No mesmo diretório inicie o React

```
sudo npm start
```

## Em seguida inicie o servidor JSON

```
npm run server
```