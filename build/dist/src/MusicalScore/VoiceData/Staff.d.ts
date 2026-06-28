import { Voice } from "./Voice";
import { Instrument } from "../Instrument";
import { Tie } from "./Tie";
export declare class Staff {
    constructor(parentInstrument: Instrument, instrumentStaffId: number);
    idInMusicSheet: number;
    audible: boolean;
    Visible: boolean;
    following: boolean;
    isTab: boolean;
    /** For tablature staves: render frets as letters (French lute tab) instead of numbers.
     * Set from MusicXML staff-details/@show-frets="letters". */
    tabUseLetters: boolean;
    private parentInstrument;
    private voices;
    private volume;
    private id;
    private stafflineCount;
    hasLyrics: boolean;
    openTieDict: {
        [_: number]: Tie;
    };
    get ParentInstrument(): Instrument;
    set ParentInstrument(value: Instrument);
    get Voices(): Voice[];
    get Id(): number;
    get Volume(): number;
    set Volume(value: number);
    get StafflineCount(): number;
    set StafflineCount(value: number);
    /** Checks whether Staff.Visible and Staff.ParentInstrument.Visible. */
    isVisible(): boolean;
}
