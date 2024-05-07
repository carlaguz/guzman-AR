const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//mas asercioneS
describe('Pruebas a la peticion GET', () => {
    it('Peticion GET debe regresar un estado de 200 =)', (done) => { // <= Pass in done callback
        chai.request('http://localhost:8080')
        .get('/characters/')
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(err).to.be.null;
          done();
        });
      });
  }
)