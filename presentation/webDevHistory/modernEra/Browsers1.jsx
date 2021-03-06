// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";


import fourBrowsers from "./browsers/fourBrowsers.png";

import preloader from "spectacle/lib/utils/preloader";
preloader([fourBrowsers]);


export default (
    <Slide bgColor="primary" align="center top">
        <Heading textColor="black" size={3}>
            Modern Era: Browsers
        </Heading>
        <Text>
            Browsers: Chrome, IE -> Edge, Firefox, Safari

        </Text>

        <Image src={fourBrowsers} width="50%"/>

    </Slide>
);