import React from 'react';
import { useReducer, useRouter } from "next/router";
import Head from "next/head"
export default function Game() {
  const router = useRouter();
  //console.log(router)
  const {platform,game} = router.query;
  return (
    <div>
      <Head>
        <title>{game} | {platform}</title>
      </Head>
      <h1>Estamos en la plataforma de: {platform}</h1>
      <h1>Estamos en un juego: {game}</h1>
    </div>
  );
}
