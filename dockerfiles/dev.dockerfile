FROM oven/bun:latest

WORKDIR /nuxt-boilerplate

COPY package*.json ./

COPY bun*.lockb ./

RUN bun install

COPY app.vue ./

COPY nuxt.config.ts ./

COPY tailwind.config.js ./

COPY postcss.config.js ./

COPY app.config.ts ./

COPY .nuxtignore ./

COPY tsconfig.json ./

COPY vite.config.mts ./

COPY assets ./assets 

COPY components ./components

COPY layouts ./layouts

COPY public ./public

COPY middleware ./middleware

COPY plugins ./plugins

COPY composables ./composables

COPY pages ./pages

COPY plugins ./plugins

COPY server ./server

COPY utils ./utils

CMD [ "bun" , "run", "dev" ]