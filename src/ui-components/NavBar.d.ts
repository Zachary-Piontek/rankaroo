/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Rankaroo?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    Categories?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    User?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
