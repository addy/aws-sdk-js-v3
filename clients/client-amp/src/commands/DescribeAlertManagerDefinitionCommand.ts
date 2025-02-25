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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import {
  DescribeAlertManagerDefinitionRequest,
  DescribeAlertManagerDefinitionRequestFilterSensitiveLog,
  DescribeAlertManagerDefinitionResponse,
  DescribeAlertManagerDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAlertManagerDefinitionCommand,
  serializeAws_restJson1DescribeAlertManagerDefinitionCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAlertManagerDefinitionCommandInput extends DescribeAlertManagerDefinitionRequest {}
export interface DescribeAlertManagerDefinitionCommandOutput
  extends DescribeAlertManagerDefinitionResponse,
    __MetadataBearer {}

/**
 * Describes an alert manager definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeAlertManagerDefinitionCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeAlertManagerDefinitionCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new DescribeAlertManagerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlertManagerDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeAlertManagerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class DescribeAlertManagerDefinitionCommand extends $Command<
  DescribeAlertManagerDefinitionCommandInput,
  DescribeAlertManagerDefinitionCommandOutput,
  AmpClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAlertManagerDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlertManagerDefinitionCommandInput, DescribeAlertManagerDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "DescribeAlertManagerDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAlertManagerDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAlertManagerDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAlertManagerDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAlertManagerDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAlertManagerDefinitionCommandOutput> {
    return deserializeAws_restJson1DescribeAlertManagerDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
