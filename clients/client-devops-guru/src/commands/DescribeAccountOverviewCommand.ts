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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  DescribeAccountOverviewRequest,
  DescribeAccountOverviewRequestFilterSensitiveLog,
  DescribeAccountOverviewResponse,
  DescribeAccountOverviewResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAccountOverviewCommand,
  serializeAws_restJson1DescribeAccountOverviewCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAccountOverviewCommandInput extends DescribeAccountOverviewRequest {}
export interface DescribeAccountOverviewCommandOutput extends DescribeAccountOverviewResponse, __MetadataBearer {}

/**
 * <p> For the time range passed in, returns the number of open reactive insight that were
 * 			created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all
 * 			closed reactive insights. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountOverviewCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountOverviewCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAccountOverviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountOverviewCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountOverviewCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeAccountOverviewCommand extends $Command<
  DescribeAccountOverviewCommandInput,
  DescribeAccountOverviewCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountOverviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountOverviewCommandInput, DescribeAccountOverviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeAccountOverviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountOverviewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountOverviewResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountOverviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccountOverviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountOverviewCommandOutput> {
    return deserializeAws_restJson1DescribeAccountOverviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
