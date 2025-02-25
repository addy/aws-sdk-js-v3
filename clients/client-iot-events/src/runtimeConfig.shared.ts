// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { IoTEventsClientConfig } from "./IoTEventsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsClientConfig) => ({
  apiVersion: "2018-07-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT Events",
  urlParser: config?.urlParser ?? parseUrl,
});
