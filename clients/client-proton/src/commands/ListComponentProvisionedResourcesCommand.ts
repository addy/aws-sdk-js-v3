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

import {
  ListComponentProvisionedResourcesInput,
  ListComponentProvisionedResourcesInputFilterSensitiveLog,
  ListComponentProvisionedResourcesOutput,
  ListComponentProvisionedResourcesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListComponentProvisionedResourcesCommand,
  serializeAws_json1_0ListComponentProvisionedResourcesCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface ListComponentProvisionedResourcesCommandInput extends ListComponentProvisionedResourcesInput {}
export interface ListComponentProvisionedResourcesCommandOutput
  extends ListComponentProvisionedResourcesOutput,
    __MetadataBearer {}

/**
 * <p>List provisioned resources for a component with details.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-components.html">Proton components</a> in the
 *   <i>Proton Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListComponentProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListComponentProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new ListComponentProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListComponentProvisionedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class ListComponentProvisionedResourcesCommand extends $Command<
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListComponentProvisionedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComponentProvisionedResourcesCommandInput, ListComponentProvisionedResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListComponentProvisionedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComponentProvisionedResourcesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListComponentProvisionedResourcesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListComponentProvisionedResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ListComponentProvisionedResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListComponentProvisionedResourcesCommandOutput> {
    return deserializeAws_json1_0ListComponentProvisionedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
