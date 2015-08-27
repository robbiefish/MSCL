NDSummary.OnToolTipsLoaded("File:MicroStrain/DataBuffer.h",{3554:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Used to easily read a container of bytes</div></div>",3555:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3555\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BufferWriter</div></div></div><div class=\"TTSummary\">Class used to interface with a DataBuffer and append data to it</div></div>",3557:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3557\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BufferWriter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">buffer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a BufferWriter object</div></div>",3559:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3559\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* m_buffer</div><div class=\"TTSummary\">The buffer to write to, at the specific position to start writing data</div></div>",3560:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3560\" class=\"NDPrototype NoParameterForm\">std::size_t m_size</div><div class=\"TTSummary\">The size available to write</div></div>",3561:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3561\" class=\"NDPrototype NoParameterForm\">std::size_t* m_writeOffset</div><div class=\"TTSummary\">A pointer to the current position to start writing in the buffer</div></div>",3563:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3563\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span>* buffer()</div><div class=\"TTSummary\">Gets the buffer to write to</div></div>",3564:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3564\" class=\"NDPrototype NoParameterForm\">std::size_t size()</div><div class=\"TTSummary\">Gets the size of the buffer available to write</div></div>",3565:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3565\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> commit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">numBytesAdded</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Commits a number of bytes that were added to the buffer by moving the current offset.</div></div>",3566:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3566\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataBuffer</div></div></div><div class=\"TTSummary\">A buffer of bytes extending from the ByteStream class that is used for holding bytes read in from the connection</div></div>",3568:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3568\" class=\"NDPrototype NoParameterForm\">ByteStream m_data</div><div class=\"TTSummary\">The underlying ByteStream that holds the data</div></div>",3569:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3569\" class=\"NDPrototype NoParameterForm\">std::size_t m_appendPosition</div><div class=\"TTSummary\">The current position to use when appending data to the buffer</div></div>",3570:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3570\" class=\"NDPrototype NoParameterForm\">std::size_t m_readPosition</div><div class=\"TTSummary\">The current position in the buffer for reading data</div></div>",3572:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3572\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object</div></div>",3573:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3573\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer object given existing data as Bytes</div></div>",3574:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3574\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DataBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor to create a DataBuffer given an existing ByteStream</div></div>",3575:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3575\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~DataBuffer()</div><div class=\"TTSummary\">Default destructor for the DataBuffer object</div></div>",3576:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3576\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> peekByte()</div><div class=\"TTSummary\">Gets the next byte from the buffer without moving the read position</div></div>",3577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3577\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int8</span> read_int8()</div><div class=\"TTSummary\">Reads the next 1-byte signed integer from the buffer</div></div>",3578:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3578\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> read_uint8()</div><div class=\"TTSummary\">Reads the next 1-byte unsigned integer from the buffer</div></div>",3579:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3579\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> read_int16()</div><div class=\"TTSummary\">Reads the next 2-byte signed integer from the buffer</div></div>",3580:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3580\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> read_uint16()</div><div class=\"TTSummary\">Reads the next 2-byte unsigned integer from the buffer</div></div>",3581:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3581\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> read_uint32()</div><div class=\"TTSummary\">Reads the next 4-byte unsigned integer from the buffer</div></div>",3582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3582\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> read_float()</div><div class=\"TTSummary\">Reads the next 4-byte float from the buffer</div></div>",3583:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3583\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> read_double()</div><div class=\"TTSummary\">Reads the next 8-byte double from the buffer</div></div>",3584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3584\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> read_string(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reads a string of the specified length from the buffer</div></div>",3585:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3585\" class=\"NDPrototype NoParameterForm\">std::size_t size() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of bytes in the DataBuffer</div></div>",3587:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3587\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> moreToRead() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not there are more bytes to be read in the DataBuffer</div></div>",3588:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3588\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> shiftExtraToStart()</div><div class=\"TTSummary\">Copies any unparsed data in the DataBuffer to the front of the buffer.&nbsp; Also resets the readPosition and moves the appendPosition to immediately after the data that was moved.</div></div>",3589:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3589\" class=\"NDPrototype NoParameterForm\">BufferWriter getBufferWriter()</div><div class=\"TTSummary\">Creates a BufferWriter object based on this DataBuffer.</div></div>",3590:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetBuffer()</div><div class=\"TTSummary\">Resets the append and read positions in the buffer back to 0.</div></div>",3591:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3591\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ReadBufferSavePoint</div></div></div><div class=\"TTSummary\">Acts as a save point so that bytes can be read out of a DataBuffer and the read point reverted</div></div>",3593:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3593\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ReadBufferSavePoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ReadBufferSavePoint based on the DataBuffer passed in</div></div>",3594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3594\" class=\"NDPrototype NoParameterForm\">~ReadBufferSavePoint()</div><div class=\"TTSummary\">Destroying a ReadBufferSavePoint object, reverting any uncommited data</div></div>",3596:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3596\" class=\"NDPrototype NoParameterForm\">DataBuffer* m_data</div><div class=\"TTSummary\">The DataBuffer of data to be accessed</div></div>",3597:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3597\" class=\"NDPrototype NoParameterForm\">std::size_t m_savePosition</div><div class=\"TTSummary\">The current save position in the DataBuffer</div></div>",3599:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3599\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> revert()</div><div class=\"TTSummary\">reverts the read position of the DataBuffer back to its saved position</div></div>",3600:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3600\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> commit()</div><div class=\"TTSummary\">commits all the currently read data so that it will not be reverted</div></div>"});