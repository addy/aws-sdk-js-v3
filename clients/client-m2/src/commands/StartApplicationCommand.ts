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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import {
  StartApplicationRequest,
  StartApplicationRequestFilterSensitiveLog,
  StartApplicationResponse,
  StartApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartApplicationCommand,
  serializeAws_restJson1StartApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface StartApplicationCommandInput extends StartApplicationRequest {}
export interface StartApplicationCommandOutput extends StartApplicationResponse, __MetadataBearer {}

/**
 * <p>Starts an application that is currently stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, StartApplicationCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, StartApplicationCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 */
export class StartApplicationCommand extends $Command<
  StartApplicationCommandInput,
  StartApplicationCommandOutput,
  M2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartApplicationCommandInput, StartApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "StartApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartApplicationCommandOutput> {
    return deserializeAws_restJson1StartApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
