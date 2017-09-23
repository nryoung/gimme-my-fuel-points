import React from 'react';

const EntryID = ({ onChange }) => (
  <div>
    <input name="entryid1" type="text" maxLength={3} onChange={onChange} />
    <input name="entryid2" type="text" maxLength={3} onChange={onChange} />
    <input name="entryid3" type="text" maxLength={4} onChange={onChange} />
    <input name="entryid4" type="text" maxLength={3} onChange={onChange} />
    <input name="entryid5" type="text" maxLength={4} onChange={onChange} />
    <input name="entryid6" type="text" maxLength={5} onChange={onChange} />
  </div>
);

export default EntryID;
