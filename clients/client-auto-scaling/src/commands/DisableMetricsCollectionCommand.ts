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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DisableMetricsCollectionQuery, DisableMetricsCollectionQueryFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDisableMetricsCollectionCommand,
  serializeAws_queryDisableMetricsCollectionCommand,
} from "../protocols/Aws_query";

export interface DisableMetricsCollectionCommandInput extends DisableMetricsCollectionQuery {}
export interface DisableMetricsCollectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables group metrics collection for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DisableMetricsCollectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DisableMetricsCollectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DisableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableMetricsCollectionCommandInput} for command's `input` shape.
 * @see {@link DisableMetricsCollectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DisableMetricsCollectionCommand extends $Command<
  DisableMetricsCollectionCommandInput,
  DisableMetricsCollectionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableMetricsCollectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableMetricsCollectionCommandInput, DisableMetricsCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DisableMetricsCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableMetricsCollectionQueryFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableMetricsCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisableMetricsCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableMetricsCollectionCommandOutput> {
    return deserializeAws_queryDisableMetricsCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
