NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipNode.h",{201:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype201\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipNode</div></div></div><div class=\"TTSummary\">Abstract base class for Inertial or RTK (MIP) devices</div></div>",202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype202\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Bytes doCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">descriptorSet,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">cmdDescriptor,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">fieldData,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">ackNackResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">dataResponse,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">responseDataDescriptor&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Note: This is an ADVANCED COMMAND. Most users will not need to use this.&nbsp; Allows sending custom data as a MIP packet to the device, and receiving custom data as a response.</div></div>",203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype203\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",204:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype204\" class=\"NDPrototype NoParameterForm\">Connection&amp; connection()</div><div class=\"TTSummary\">Gets the Connection object that this MipNode is using.</div></div>",205:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype205\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipNodeFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the MipNodeFeatures for this device.&nbsp; Note: This will be invalid when the MipNode is destroyed.</div></div>",206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype206\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearDeviceInfo()</div><div class=\"TTSummary\">Clears cached device info (ie fw version, model number, receiver info, etc.), forcing it to be re-read from the device the next time it is used.</div></div>",207:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype207\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the MipNode.</div></div>",208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype208\" class=\"NDPrototype NoParameterForm\">DeviceState lastDeviceState() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the last known DeviceState for the MipNode.&nbsp; This device state is updated by MSCL when data packets are received, as well as when operations are performed, such as setting a Node to idle.</div></div>",209:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype209\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the MipNode.</div></div>",210:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype210\" class=\"NDPrototype NoParameterForm\">MipModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipModels::NodeModel of the MipNode.</div></div>",211:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype211\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model name of the MipNode (ie. &quot;3DM-GX3-45&quot;).</div></div>",212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype212\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> modelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model number of the MipNode (ie. &quot;6225-4220&quot;).</div></div>",213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype213\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the MipNode (ie. &quot;6225-01319&quot;).</div></div>",214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype214\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> lotNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lot number of the MipNode (ie. &quot;I042Y&quot;).</div></div>",215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype215\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> deviceOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the device options of the MipNode (ie. &quot;5g, 300d/s&quot;).</div></div>",216:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype216\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from commands.</div></div>",217:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype217\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timeout to use when waiting for responses from commands.</div></div>",218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype218\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name()</div><div class=\"TTSummary\">Gets the name of the MipNode. This is the universal sensor name that should be used for uploading to SensorCloud.&nbsp; This is the same as calling MipNode::deviceName.</div></div>",219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype219\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the Node to check for communication.&nbsp; Sends the &quot;Ping&quot; command to the device.</div></div>",220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype220\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> setToIdle()</div><div class=\"TTSummary\">Suspends streaming (if enabled) or wakes the device from sleep (if sleeping), putting the device in an idle mode.&nbsp; After this command is used, the resume command may be used to put the Node back into the mode it was previously in before setToIdle was called.</div></div>",221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype221\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> cyclePower()</div><div class=\"TTSummary\">Performs the &quot;Device Reset&quot; command.&nbsp; Note: This is essentially the same as unplugging and plugging the device back in.</div></div>",222:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype222\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resume()</div><div class=\"TTSummary\">Places the Node back in the mode it was in before issuing the setToIdle command.&nbsp; If the setToIdle command was not issued, then the device is placed in default mode.</div></div>",223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype223\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> getCommunicationMode() = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the current communication mode that the node is in.</div></div>",224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype224\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> setCommunicationMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">communicationMode</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Sets the communication mode for the node.&nbsp; Note: The node info will be reset when doing this and therefore will require being fetched again the next time it is requested.</div></div>",225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype225\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> saveSettingsAsStartup()</div><div class=\"TTSummary\">Save the current value of the specified settings commands as a startup setting.</div></div>",226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype226\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> saveSettingsAsStartup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">MipCommands&nbsp;</td><td class=\"PName last\">cmdIds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Save the current value of the specified settings commands as a startup setting.</div></div>",227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype227\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> saveSettingsAsStartup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipCommandParameters&nbsp;</td><td class=\"PName last\">cmdParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Save the current value of the specified settings commands as a startup setting.</div></div>",228:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype228\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> loadStartupSettings()</div><div class=\"TTSummary\">Loads the saved startup settings onto the Node as its current settings.&nbsp; This function is useful if you have powered on the Node, made changes to its settings, and want to get back to its startup settings.</div></div>",229:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype229\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadStartupSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">MipCommands&nbsp;</td><td class=\"PName last\">cmdIds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the saved startup settings onto the Node as its current settings.&nbsp; This function is useful if you have powered on the Node, made changes to its settings, and want to get back to its startup settings.</div></div>",230:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype230\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadStartupSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipCommandParameters&nbsp;</td><td class=\"PName last\">cmdParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the saved startup settings onto the Node as its current settings.&nbsp; This function is useful if you have powered on the Node, made changes to its settings, and want to get back to its startup settings.</div></div>",231:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype231\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> loadFactoryDefaultSettings()</div><div class=\"TTSummary\">Loads the factory default settings onto the Node as its current settings.</div></div>",232:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype232\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadFactoryDefaultSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">MipCommands&nbsp;</td><td class=\"PName last\">cmdIds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the factory default settings onto the Node as its current settings.</div></div>",233:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype233\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> loadFactoryDefaultSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipCommandParameters&nbsp;</td><td class=\"PName last\">cmdParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Loads the factory default settings onto the Node as its current settings.</div></div>",234:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype234\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setUARTBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">baudRate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">resetConnection&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the baud rate.&nbsp; The device can be unresponsive for as much as 250 ms following this command.&nbsp; Important: The connection to the port will be automatically closed and re-opened at the new baud rate unless resetConnection parameter is false.</div></div>",235:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype235\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setUARTBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">baudRate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">portId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">resetConnection&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the baud rate.&nbsp; The device can be unresponsive for as much as 250 ms following this command.&nbsp; Important: The connection to the port will be automatically closed and re-opened at the new baud rate unless resetConnection parameter is false.</div></div>",236:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype236\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> getUARTBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">portId&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">1</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the current baud rate for the inertial device.</div></div>",237:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype237\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">RawBytePackets getRawBytePackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of raw byte packets that have been collected.</div></div>"});