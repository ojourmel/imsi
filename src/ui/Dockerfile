FROM node:slim

RUN mkdir -p /imsi
WORKDIR /imsi

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | sh
ENV PATH="/root/.yarn/bin:${PATH}"

# Install app dependencies
COPY ./package.json ./package.json
RUN yarn && \
    rm ./package.json

# The rest of the code will be mounted as a volume
CMD ["/bin/false"]
