FROM cypress/included:11.1.0

RUN mkdir /miro-assignment

WORKDIR /miro-assignment

Copy ./package.json .

COPY ./cypress.config.js .

COPY ./cypress.env.json .

Copy ./cypress ./cypress

Run npm install

ENTRYPOINT ["npm","run","test"]