import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ServiceQuotasClientResolvedConfig
} from "../ServiceQuotasClient";
import {
  RequestServiceQuotaIncreaseRequest,
  RequestServiceQuotaIncreaseResponse
} from "../models/index";
import {
  deserializeAws_json1_1RequestServiceQuotaIncreaseCommand,
  serializeAws_json1_1RequestServiceQuotaIncreaseCommand
} from "../protocols/Aws_json1_1";
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

export type RequestServiceQuotaIncreaseCommandInput = RequestServiceQuotaIncreaseRequest;
export type RequestServiceQuotaIncreaseCommandOutput = RequestServiceQuotaIncreaseResponse;

export class RequestServiceQuotaIncreaseCommand extends $Command<
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RequestServiceQuotaIncreaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RequestServiceQuotaIncreaseCommandInput,
    RequestServiceQuotaIncreaseCommandOutput
  > {
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
    input: RequestServiceQuotaIncreaseCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RequestServiceQuotaIncreaseCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<RequestServiceQuotaIncreaseCommandOutput> {
    return deserializeAws_json1_1RequestServiceQuotaIncreaseCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}