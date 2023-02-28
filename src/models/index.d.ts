import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerFilms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Films, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly film_name?: string | null;
  readonly rating?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFilms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Films, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly film_name?: string | null;
  readonly rating?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Films = LazyLoading extends LazyLoadingDisabled ? EagerFilms : LazyFilms

export declare const Films: (new (init: ModelInit<Films>) => Films) & {
  copyOf(source: Films, mutator: (draft: MutableModel<Films>) => MutableModel<Films> | void): Films;
}