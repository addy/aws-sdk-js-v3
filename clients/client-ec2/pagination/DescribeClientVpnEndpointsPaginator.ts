import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeClientVpnEndpointsCommand,
  DescribeClientVpnEndpointsCommandInput,
  DescribeClientVpnEndpointsCommandOutput,
} from "../commands/DescribeClientVpnEndpointsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeClientVpnEndpointsCommandInput,
  ...args: any
): Promise<DescribeClientVpnEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClientVpnEndpointsCommand(input, ...args));
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeClientVpnEndpointsCommandInput,
  ...args: any
): Promise<DescribeClientVpnEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.describeClientVpnEndpoints(input, ...args);
};
export async function* describeClientVpnEndpointsPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClientVpnEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeClientVpnEndpointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}