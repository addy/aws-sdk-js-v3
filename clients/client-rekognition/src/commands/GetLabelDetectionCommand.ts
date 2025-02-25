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
  GetLabelDetectionRequest,
  GetLabelDetectionRequestFilterSensitiveLog,
  GetLabelDetectionResponse,
  GetLabelDetectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetLabelDetectionCommand,
  serializeAws_json1_1GetLabelDetectionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface GetLabelDetectionCommandInput extends GetLabelDetectionRequest {}
export interface GetLabelDetectionCommandOutput extends GetLabelDetectionResponse, __MetadataBearer {}

/**
 * <p>Gets the label detection results of a Amazon Rekognition Video analysis started by <a>StartLabelDetection</a>.  </p>
 *
 *          <p>The label detection operation is started by a call to <a>StartLabelDetection</a>
 *       which returns a job identifier (<code>JobId</code>). When the label detection operation finishes, Amazon Rekognition publishes a completion status to
 *       the Amazon Simple Notification Service topic registered in the initial call to <code>StartlabelDetection</code>. To get the results
 *       of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *       If so, call  <a>GetLabelDetection</a> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p>
 *          <p>
 *             <code>GetLabelDetection</code> returns an array of detected labels (<code>Labels</code>) sorted by the time
 *        the labels were detected. You can also sort by the label name by specifying <code>NAME</code> for the
 *        <code>SortBy</code> input parameter.</p>
 *          <p>The labels returned include the label name, the percentage confidence in the accuracy of the detected label,
 *         and the time the label was detected in the video.</p>
 *          <p>The returned labels also include bounding box information for common objects, a
 *        hierarchical taxonomy of detected labels, and the version of the label model used for detection.</p>
 *
 *          <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than
 *     specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set
 *     of results. To get the next page of results, call <code>GetlabelDetection</code> and populate the <code>NextToken</code> request parameter with the token
 *      value returned from the previous call to <code>GetLabelDetection</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetLabelDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetLabelDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new GetLabelDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLabelDetectionCommandInput} for command's `input` shape.
 * @see {@link GetLabelDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class GetLabelDetectionCommand extends $Command<
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLabelDetectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetLabelDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLabelDetectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLabelDetectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLabelDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLabelDetectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLabelDetectionCommandOutput> {
    return deserializeAws_json1_1GetLabelDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
