import React, { useState } from "react";

type Props = {};

const Contacter = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div
      id="contacter"
      className="py-10 px-3 flex flex-col md:flex-row items-center gap-10 sm:gap-10 md:gap-0 my-20 xl:my-32"
    >
      <div className="text flex flex-col items-start justify-center gap-10 md:basis-2/4">
        <h1 className="text-left large-header text-stone-700">
          Contactez-nous
        </h1>
        <p className="text-left text-base text-stone-800 sm:text-xl sm:w-2/3">
          Notre objectif est de fournir un contenu de la plus haute qualité qui
          donne un sentiment de clarté et inspire des actions saines pour nos
          lecteurs tout au long de leur parcours de santé et de bien-être.
        </p>
      </div>

      <div className="form-cont flex items-center justify-start md:justify-center w-full h-full basis-2/4">
        <form
          onSubmit={handleSubmitForm}
          action=""
          className="flex flex-col items-start justify-center gap-2"
        >
          <div className="name flex flex-col">
            <label htmlFor="name" className="text-stone-800">
              Votre nom:
            </label>
            <input
              type="text"
              id="name"
              className="input"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="email flex flex-col">
            <label htmlFor="email" className="text-stone-800">
              Votre email:
            </label>
            <input
              type="email"
              id="email"
              className="input"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="message flex flex-col">
            <label htmlFor="mssg" className="text-stone-800">
              Votre message ici:
            </label>
            <textarea
              id="mssg"
              cols={30}
              rows={10}
              className="input resize-none"
              value={message}
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>

          <input
            type="submit"
            value="Envoyer"
            className="button cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contacter;
