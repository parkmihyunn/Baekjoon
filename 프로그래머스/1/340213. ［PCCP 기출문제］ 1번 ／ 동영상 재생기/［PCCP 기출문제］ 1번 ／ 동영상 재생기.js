function solution(video_len, pos, op_start, op_end, commands) {
    const [vm, vs] = video_len.split(":").map(Number);
    const [opm_s, ops_s] = op_start.split(':').map(Number);
    const [opm_e, ops_e] = op_end.split(':').map(Number);
    let [nm, ns] = pos.split(":").map(Number); 
    commands.forEach((command) => {
        if(nm > opm_s && nm < opm_e || nm > opm_s && nm === opm_e && ns <= ops_e || nm === opm_s && ns >= ops_s && nm < opm_e || nm === opm_s && ns >= ops_s &&  nm === opm_e && ns <= ops_e ) {
            [nm, ns] = [opm_e, ops_e];
        }
        if(command === "prev") {
            ns -= 10;
            if(ns < 0) {
                if(nm === 0) [nm, ns] = [0, 0];
                else {
                    [nm, ns] = [nm - 1 , ns + 60];
                }
            }
        } else {
            ns += 10;
            if(ns >= 60) {
                [nm, ns] = [nm + 1, ns - 60];
                if(nm > vm || nm === vm && ns > vs) {
                    [nm, ns] = [vm, vs];
                }
            }
            if(nm === vm && ns > vs) ns = vs;
        }
    });
        if(nm > opm_s && nm < opm_e || nm > opm_s && nm === opm_e && ns <= ops_e || nm === opm_s && ns >= ops_s && nm < opm_e || nm === opm_s && ns >= ops_s &&  nm === opm_e && ns <= ops_e ) {
            [nm, ns] = [opm_e, ops_e];
        }
    nm = String(nm).length === 1 ? "0"+String(nm) : String(nm);
    ns = String(ns).length === 1 ? "0"+String(ns) : String(ns);
    let anw = nm + ":" + ns;
    return anw;
}