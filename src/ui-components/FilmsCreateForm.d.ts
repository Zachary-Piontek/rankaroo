/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FilmsCreateFormInputValues = {
    film_name?: string;
    rating?: string;
};
export declare type FilmsCreateFormValidationValues = {
    film_name?: ValidationFunction<string>;
    rating?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FilmsCreateFormOverridesProps = {
    FilmsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    film_name?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FilmsCreateFormProps = React.PropsWithChildren<{
    overrides?: FilmsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FilmsCreateFormInputValues) => FilmsCreateFormInputValues;
    onSuccess?: (fields: FilmsCreateFormInputValues) => void;
    onError?: (fields: FilmsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FilmsCreateFormInputValues) => FilmsCreateFormInputValues;
    onValidate?: FilmsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FilmsCreateForm(props: FilmsCreateFormProps): React.ReactElement;
