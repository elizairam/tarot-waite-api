# API Tarot Rider-Waite Smith ✨
###### pt-br

## Descrição
#### Essa API foi construída com dados de 78 cartas do tarô Rider-Waite Smith.
#### O objetivo era criar uma API que sintetizasse os significados das cartas de tarô e alguns métodos de embaralhamento mais comuns:
#### 🔮 aleatória >  a quantidade de cartas respondidas varia conforme o parâmetro inserido na requisição
#### 🔮 cruz celta > são respondidas 10 cartas pela requisição
#### 🔮 da vida > são respondidas 21 cartas pela requisição
#### 🔮 da âncora > são respondidas 7 cartas pela requisição
#### 🔮 nove cartas > são respondidas 9 cartas pela requisição

## Requisições
### Método GET:
##### Endpoint para retornar todas as 78 cartas:
``` /cartas ``` 

##### Exemplo da resposta:
```    
 "cartas": [
        {
            "id": 0,
            "valor": "0",
            "nome": "O Louco",
            "imgUrl": "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
            "significado": "Busca de experiências novas, esperanças, descobertas, pureza, mas também as extravagâncias, delírio, intoxicação, frenesi, disparates. Aventuras. Impulsos. Rapidez.",
            "tipo": "Arcano maior"
        },
        {
            "id": 1,
            "valor": "1",
            "nome": "O Mago",
            "imgUrl": "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
            "significado": "O início de alguma coisa, força de influenciar os outros, habilidade, sutileza, direção, auto-confiança, força de vontade, poder de criar, inteligência, armadilha dos inimigos.",
            "tipo": "Arcano maior"
        },
        {
            ...
        },
           {
            "id": 77,
            "valor": "Ouros",
            "nome": "Dois de Ouros",
            "imgUrl": "https://www.sacred-texts.com/tarot/pkt/img/pe02.jpg",
            "significado": "Alegria, brincadeiras, bons relacionamentos.",
            "tipo": "Arcano menor"
        },
        {
            "id": 78,
            "valor": "Ouros",
            "nome": "Ás de Ouros",
            "imgUrl": "https://www.sacred-texts.com/tarot/pkt/img/peac.jpg",
            "significado": "Fertilidade, êxtase. Abundância. Boa saúde.",
            "tipo": "Arcano menor"
        }
]
```
##### Endpoint para retornar uma carta específica pelo id:
``` /cartas/id/{id}``` 
##### Exemplo da resposta com id 70:
``` /cartas/id/70``` 
``` 
{
    "id": 70,
    "valor": "Ouros",
    "nome": "Nove de Ouros",
    "imgUrl": "https://www.sacred-texts.com/tarot/pkt/img/pe09.jpg",
    "significado": "Abundância, fartura. Segurança. Sucesso.",
    "tipo": "Arcano menor"
}
```

#### 🎲 Endpoints para modos de embaralhamento:
##### Aleatório 
``` /cartas/jogo/sortear/{número de cartas}``` 
##### Exemplo da resposta com 2 cartas para sortear aleatoriamente:
``` /cartas/jogo/sortear/2``` 
```
[
    {
        "id": 57,
        "valor": "Espadas",
        "nome": "Oito de Espadas",
        "imgUrl": "https://www.sacred-texts.com/tarot/pkt/img/sw08.jpg",
        "significado": "Más notícias. Crise interna. Os problemas dessa carta são passageiros.",
        "tipo": "Arcano menor"
    },
    {
        "id": 32,
        "valor": "Paus",
        "nome": "Quatro de Paus",
        "imgUrl": "https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg",
        "significado": "Sucesso material. Estabilidade.",
        "tipo": "Arcano menor"
    }
]
```
##### Cruz da verdade
```/cartas/jogo/sortear/5/cruz-verdade```
##### Nove cartas
```/cartas/jogo/sortear/9/nove-cartas```
##### Cruz celta
```/cartas/jogo/sortear/10/cruz-celta```
##### Âncora
```/cartas/jogo/sortear/7/ancora```
##### Vida
```/cartas/jogo/sortear/21/vida```

#### ☘ Endpoints para cada naipe:
##### Paus
```/cartas/valor/paus```
##### Copas
```/cartas/valor/copas```
##### Espadas
```/cartas/valor/espadas```
##### Ouros
```/cartas/valor/ouros```


#### 🧙‍♀️ Endpoints para tipos de arcano:
##### Arcanos maiores
```/cartas/tipo/arcano-maior```
##### Arcanos menores
```/cartas/tipo/arcano-menor```

## Referências 
## 📖:
##### The Pictorial Key to the Tarot by Arthur Edward Waite, Illustration by Pamela Colman Smith. 1911. [[ilustrações e deck]](https://www.sacred-texts.com/tarot/pkt/index.htm)
##### O TARÔ ILUSTRADO DE WAITE, Arthur E. Waite / Pamela Smith. Artha Editora / RS [significados das cartas]
##### TARÔ CLARO E SIMPLES, Josephine Ellershan. Editora Pensamento-Cultrix. São Paulo / SP - 2020 [métodos de embaralhamento]
## 💻:
##### Make your own mock API by Ania Kubow [Youtube](https://https://youtu.be/FLnxgSZ0DG4) 
##### Deploy NODEJS and Express API on Heroku by Arslan [Youtube](https://youtu.be/72DYDMP09MM)
##### How to create an API in Express and deploy it on Heroku by Ishraq Haider Chowdhury [Youtube](https://youtu.be/SWbUTOmT-gg)
## 🐙:
##### Tarot API by [@ekelen](https://rws-cards-api.herokuapp.com/)
##### Deck of Cards API [Deck of Cards](https://github.com/crobertsbmw/deckofcards)
