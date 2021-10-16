import React from "react";
import {
  detailLayoutSubgrid,
  detailLayoutSubgridHeader,
} from "../Layout/detail.css";
import Link from "next/link";
import capitalize from "../../utility/capitalize";
import { h2, h3 } from "../../base/headings.css";
import {
  EvolutionBlock,
  EvolutionDetail,
  EvolutionKey,
  EvolutionList,
} from "./evolution.css";

interface EvolutionProps {
  chain: ChainLink;
  currentPokemon: string;
}

interface ChainSpecies {
  species: NamedResource;
  evolution_details: EvolutionDetails[];
}

function recursiveChain(
  chain: ChainLink[] | undefined,
  species: ChainSpecies[]
): ChainSpecies[] {
  if (!chain || !chain.length) {
    return species;
  }
  const updatedChain: ChainSpecies[][] = chain.map((evolutionPath) => {
    const evolutionSpecies = {
      species: evolutionPath.species,
      evolution_details: evolutionPath.evolution_details,
    };
    const updatedSpecies = species.concat(evolutionSpecies);
    return recursiveChain(evolutionPath.evolves_to, updatedSpecies);
  });
  return ([] as ChainSpecies[]).concat(...updatedChain);
}

function Evolution({ chain, currentPokemon }: EvolutionProps) {
  const evolutionChain = [
    ...new Set(
      recursiveChain(chain.evolves_to, [
        {
          species: chain.species,
          evolution_details: chain.evolution_details,
        },
      ])
    ),
  ];
  return (
    <div className={detailLayoutSubgrid}>
      <h2 className={`${detailLayoutSubgridHeader} ${h2}`}>Evolution Chain</h2>
      {evolutionChain.map((link, index) => (
        <div
          key={`${link.species.name}-${index}`}
          className={
            EvolutionBlock[
              index === evolutionChain.length - 1 ? "noEvolution" : "evolution"
            ]
          }
        >
          <h3 className={h3}>
            {link.species.name !== currentPokemon ? (
              <Link
                href={`/${link.species.url
                  .substring(0, link.species.url.length - 1)
                  .split("/")
                  .pop()}/${link.species.name}`}
              >
                {capitalize(link.species.name)}
              </Link>
            ) : (
              capitalize(link.species.name)
            )}
          </h3>
          <dl className={EvolutionList}>
            {link.evolution_details.map((details) => {
              return Object.entries(details)
                .filter(([_key, value]) => value)
                .map(([key, value]) => {
                  if (
                    typeof value === "object" &&
                    value !== null &&
                    value.name
                  ) {
                    return (
                      <React.Fragment key={key}>
                        <dt className={EvolutionKey}>{key}:</dt>
                        <dd className={EvolutionDetail}>{value.name}</dd>
                      </React.Fragment>
                    );
                  }
                  return (
                    <>
                      <dt key={key} className={EvolutionKey}>
                        {key}:
                      </dt>
                      <dd className={EvolutionDetail}>{value}</dd>
                    </>
                  );
                });
            })}
          </dl>
        </div>
      ))}
    </div>
  );
}

export default Evolution;
