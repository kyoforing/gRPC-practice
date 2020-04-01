const PROTO_PATH = '../notes.proto';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const NoteService = grpc.loadPackageDefinition(packageDefinition).NoteService;
const client = new NoteService('localhost:50051', grpc.credentials.createInsecure());

module.exports = client;