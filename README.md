## Description

Test technique pour Clac des doigts.

# Sujet: CHICKEN RUN

L’objectif de ce challenge est de créer une API en Javascript (NodeJS).  
Le webservice '/chicken' sera un CRUD avec les méthodes suivantes :
- GET
- POST
- PUT
- PATCH
- DELETE  

L’objet chicken est tel que :
- name: String (required)
- birthday: Date
- weight: Number (required)
- steps: Number (default 0)
- isRunning: Boolean (default false)  

Puis le webservice '/chicken/run' augmentera la variable steps de 1.  
Libre à vous d’utiliser la base de données et les frameworks de votre choix.

## Installation

```bash
$ npm install
```

## Running the app

# development

Put ```bash POSTGRES_HOST=localhost``` in .env
```bash
$ make db && npm run start:dev
```

# production mode
```bash
$ make
```

