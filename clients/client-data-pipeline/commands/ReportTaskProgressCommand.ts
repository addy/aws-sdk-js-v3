import {
  DataPipelineClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataPipelineClient";
import {
  ReportTaskProgressInput,
  ReportTaskProgressOutput
} from "../models/index";
import {
  deserializeAws_json1_1ReportTaskProgressCommand,
  serializeAws_json1_1ReportTaskProgressCommand
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

export type ReportTaskProgressCommandInput = ReportTaskProgressInput;
export type ReportTaskProgressCommandOutput = ReportTaskProgressOutput;

export class ReportTaskProgressCommand extends $Command<
  ReportTaskProgressCommandInput,
  ReportTaskProgressCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReportTaskProgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReportTaskProgressCommandInput, ReportTaskProgressCommandOutput> {
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
    input: ReportTaskProgressCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ReportTaskProgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ReportTaskProgressCommandOutput> {
    return deserializeAws_json1_1ReportTaskProgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}