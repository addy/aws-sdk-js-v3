// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddRoleToDBClusterMessage, AddRoleToDBClusterMessageFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryAddRoleToDBClusterCommand,
  serializeAws_queryAddRoleToDBClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface AddRoleToDBClusterCommandInput extends AddRoleToDBClusterMessage {}
export interface AddRoleToDBClusterCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates an Identity and Access Management (IAM) role with a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AddRoleToDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AddRoleToDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AddRoleToDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddRoleToDBClusterCommandInput} for command's `input` shape.
 * @see {@link AddRoleToDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class AddRoleToDBClusterCommand extends $Command<
  AddRoleToDBClusterCommandInput,
  AddRoleToDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddRoleToDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AddRoleToDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddRoleToDBClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddRoleToDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddRoleToDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddRoleToDBClusterCommandOutput> {
    return deserializeAws_queryAddRoleToDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
