/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Films } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FilmsUpdateFormInputValues = {
    film_name?: string;
    rating?: string;
};
export declare type FilmsUpdateFormValidationValues = {
    film_name?: ValidationFunction<string>;
    rating?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FilmsUpdateFormOverridesProps = {
    FilmsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    film_name?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FilmsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FilmsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    films?: Films;
    onSubmit?: (fields: FilmsUpdateFormInputValues) => FilmsUpdateFormInputValues;
    onSuccess?: (fields: FilmsUpdateFormInputValues) => void;
    onError?: (fields: FilmsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FilmsUpdateFormInputValues) => FilmsUpdateFormInputValues;
    onValidate?: FilmsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FilmsUpdateForm(props: FilmsUpdateFormProps): React.ReactElement;
