import {
  GameLiftClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GameLiftClient";
import {
  DeleteVpcPeeringConnectionInput,
  DeleteVpcPeeringConnectionOutput
} from "../models/index";
import {
  deserializeAws_json1_1DeleteVpcPeeringConnectionCommand,
  serializeAws_json1_1DeleteVpcPeeringConnectionCommand
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

export type DeleteVpcPeeringConnectionCommandInput = DeleteVpcPeeringConnectionInput;
export type DeleteVpcPeeringConnectionCommandOutput = DeleteVpcPeeringConnectionOutput;

export class DeleteVpcPeeringConnectionCommand extends $Command<
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVpcPeeringConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteVpcPeeringConnectionCommandInput,
    DeleteVpcPeeringConnectionCommandOutput
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
    input: DeleteVpcPeeringConnectionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteVpcPeeringConnectionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteVpcPeeringConnectionCommandOutput> {
    return deserializeAws_json1_1DeleteVpcPeeringConnectionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}