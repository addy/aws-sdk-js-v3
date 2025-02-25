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

import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import {
  ConfigureLogsRequest,
  ConfigureLogsRequestFilterSensitiveLog,
  ConfigureLogsResponse,
  ConfigureLogsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ConfigureLogsCommand,
  serializeAws_restJson1ConfigureLogsCommand,
} from "../protocols/Aws_restJson1";

export interface ConfigureLogsCommandInput extends ConfigureLogsRequest {}
export interface ConfigureLogsCommandOutput extends ConfigureLogsResponse, __MetadataBearer {}

/**
 * Changes the packaging group's properities to configure log subscription
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ConfigureLogsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ConfigureLogsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ConfigureLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureLogsCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 */
export class ConfigureLogsCommand extends $Command<
  ConfigureLogsCommandInput,
  ConfigureLogsCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfigureLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfigureLogsCommandInput, ConfigureLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "ConfigureLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfigureLogsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigureLogsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfigureLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfigureLogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureLogsCommandOutput> {
    return deserializeAws_restJson1ConfigureLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
