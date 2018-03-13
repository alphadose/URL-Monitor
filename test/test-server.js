const chai = require('chai'),
  	  chaiHttp = require('chai-http'),
  	  server = require('../app'),
  	  should = chai.should();

chai.use(chaiHttp);

describe('Blobs', function() {

  it('should add a SINGLE blob on /blobs POST', function(done) {
  chai.request(server)
    .post('/')
    .send({'url': 'https://www.google.co.in', 'method': 'GET'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('url');
      res.body.should.have.property('method');
      res.body.should.have.property('_id');
      res.body.url.should.equal('https://www.google.co.in');
      res.body.method.should.equal('GET');
      done();
    });
 });

  it('should list ALL blobs on /blobs GET', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
 });

  it('should list a SINGLE blob on /blob/<id> GET', function(done) {
  chai.request(server)
    .get('/')
    .end(function(error, response){
    	chai.request(server)
    	  .get('/'+response.body[0]._id)
    	  .end(function(err, res) {
		      res.should.have.status(200);
		      res.should.be.json;
		      res.body.should.be.a('object');
		      res.body.should.have.property('url');
		      res.body.should.have.property('method');
		      res.body.should.have.property('_id');
		      res.body.url.should.equal(response.body[0].url);
		      res.body.method.should.equal(response.body[0].method);
      		  done();
  		});
    });
 });

  it('should update a SINGLE blob on /blob/<id> PUT', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      chai.request(server)
        .put('/'+res.body[0]._id)
        .send({'url': 'www.facebook.com', 'method': 'POST'})
        .end(function(error, response){
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('url');
          response.body.should.have.property('method');
          response.body.should.have.property('_id');
          response.body.url.should.equal(res.body[0].url);
          response.body.method.should.equal(res.body[0].method);
          done();
      });
    });
 });


it('should delete a SINGLE blob on /blob/<id> DELETE', function(done) {
  chai.request(server)
    .get('/')
    .end(function(err, res){
      chai.request(server)
        .delete('/'+res.body[0]._id)
        .end(function(error, response){
          response.should.have.status(200);
          response.text.should.equal('Blob Deleted Successfully');
          done();
          process.exit(0);
      });
    });
 });

});








