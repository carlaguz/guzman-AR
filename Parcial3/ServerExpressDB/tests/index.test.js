const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//mas asercioneS
describe('Pruebas a la peticion GET', () => {
    it('success =)', function() { // <= Pass in done callback
        chai.request('http://localhost:3000')
        .get('/characters')
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(err).to.be.null;
        });
      });

      it('fails, as expected', function(done) { // <= Pass in done callback
        chai.request('http://localhost:3000')
        .get('/')
        .end(function(err, res) {
          chai.expect(res).to.have.status(123);
          chai.done();                               // <= Call done to signal callback end
        });
      }
    );
  }
)