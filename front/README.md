cd front
yarn
yarn dev:gql

<!-- Running docker -->

<!-- docker build .  -t <username>/ace-book-front -->
docker build . -t jacksemis101/ace-book-front
docker run -d jacksemis101/ace-book-front