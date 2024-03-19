import { useEffect, useState } from "react";
import { fetchViaCepUser } from "../../services/ViaCepService";

interface GitHubUserProps {
  cep: string;
}

const GitHubUser: React.FC<GitHubUserProps> = ({ cep }) => {
  const [user, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchViaCepUser(cep)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [cep]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;

  return (
    <>
      <div>
        <h1>Dados do CEP: {user?.cep}</h1>
        <br/>
        <p>Cidade: {user?.localidade}</p>
        <p>Estado: {user?.uf}</p>
        <p>Logadouro: {user?.logradouro}</p>
        <p>Bairro: {user?.bairro}</p>
        <p>Complemento: {user?.complemento}</p>
      </div>
    </>
  );
};

export default GitHubUser;