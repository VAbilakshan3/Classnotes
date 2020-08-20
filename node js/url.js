var url=require('url');
var address='http://localhost:4004/?year=2020&month=jan';
var qu=url.parse(address,true);

console.log(qu.host);
console.log(qu.pathname);
console.log(qu.search);
var quobj=qu.query
console.log(qu);
console.log(quobj.name+" "+quobj.age);
