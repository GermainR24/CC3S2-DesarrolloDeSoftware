# Usa la imagen oficial de Node.js versión 14
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación correrá (3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]
