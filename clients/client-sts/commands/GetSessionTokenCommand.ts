import {
  STSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../STSClient";
import {
  GetSessionTokenRequest,
  GetSessionTokenResponse
} from "../models/index";
import {
  deserializeAws_queryGetSessionTokenCommand,
  serializeAws_queryGetSessionTokenCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetSessionTokenCommandInput = GetSessionTokenRequest;
export type GetSessionTokenCommandOutput = GetSessionTokenResponse;

export class GetSessionTokenCommand extends $Command<
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSessionTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSessionTokenCommandInput, GetSessionTokenCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSessionTokenCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetSessionTokenCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetSessionTokenCommandOutput> {
    return deserializeAws_queryGetSessionTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}