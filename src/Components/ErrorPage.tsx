import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="">
      <h1>Une erreur est survenue</h1>
      <p className="text-lg font-medium text-center">
        Quelque chose s'est mal passé, essayez d'actualiser ou revenez à la page
        d'accueil.
      </p>
      <Link className="link" to="/">
        Retour à la page d'accueil
      </Link>
    </section>
  );
};

export default ErrorPage;
