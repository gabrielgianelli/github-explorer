import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/24864079?s=460&u=d8f7a86d711b0716e2432339139aa5af988aae1c&v=4"
            alt="Gabriel Gianelli"
          />
          <div>
            <strong>gabrielgianelli/go-barber</strong>
            <p>Rocketseat Bootcamp Project</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/24864079?s=460&u=d8f7a86d711b0716e2432339139aa5af988aae1c&v=4"
            alt="Gabriel Gianelli"
          />
          <div>
            <strong>gabrielgianelli/go-barber</strong>
            <p>Rocketseat Bootcamp Project</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/24864079?s=460&u=d8f7a86d711b0716e2432339139aa5af988aae1c&v=4"
            alt="Gabriel Gianelli"
          />
          <div>
            <strong>gabrielgianelli/go-barber</strong>
            <p>Rocketseat Bootcamp Project</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
