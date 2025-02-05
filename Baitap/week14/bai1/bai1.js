const notes = document.querySelector('#notes');
const time = document.querySelector('#time');
const tag = document.querySelector('#tag');
const add = document.querySelector('.btn_add');
const resultMission = document.querySelector('.result_mission');

add.addEventListener('click', () => {
    const notesValue = notes.value;
    const timeValue = time.value;
    const tagValue = tag.value;

    if (!notesValue) {
        return;
    }
    let array_mission = [];
    array_mission.push(notes.value);
    notes.value = '';
    time.value = '';
    tag.value = '';

    // for (let i = 0; i < array_mission.length; i++) {
    const wrp = document.createElement('div');
    wrp.className = 'wrp';
    const wrp_p = document.createElement('div');
    wrp_p.className = 'wrp_p';
    const wrp_btn = document.createElement('div');
    wrp_btn.className = 'wrp_btn';

    // ======= Tao phan chua noi dung ========
    const p_mission = document.createElement('p');
    p_mission.className = 'content_mission';
    p_mission.innerHTML = notesValue;

    const div_time = document.createElement('div'); // chua time
    div_time.className = 'div_time';
    const p_time = document.createElement('p'); // noi dung time
    p_time.className = 'content_time';
    p_time.innerHTML = timeValue;
    const icon_time = document.createElement('i'); // icon time
    icon_time.className = 'fa-solid fa-calendar';
    div_time.appendChild(icon_time);
    div_time.appendChild(p_time);

    const div_tag = document.createElement('div');
    div_tag.className = 'div_tag';
    const p_tag = document.createElement('p');
    p_tag.className = 'tag';
    p_tag.innerHTML = tagValue;
    const icon_tag = document.createElement('i');
    icon_tag.className = 'fa-solid fa-tag';
    div_tag.appendChild(icon_tag);
    div_tag.appendChild(p_tag);
    //============ End ===============

    //========= Tao cac nut su kien ===========
    const btn_complete = document.createElement('button');
    btn_complete.textContent = 'Complete';
    btn_complete.className = 'btn_complete';
    const btn_edit = document.createElement('button');
    btn_edit.textContent = 'Edit';
    btn_edit.className = 'btn_edit';
    const btn_delete = document.createElement('button');
    btn_delete.textContent = 'Delete';
    btn_delete.className = 'btn_delete';
    //============ End ===============

    wrp_p.appendChild(p_mission);
    wrp_p.appendChild(div_time);
    wrp_p.appendChild(div_tag);

    wrp_btn.appendChild(btn_complete);
    wrp_btn.appendChild(btn_edit);
    wrp_btn.appendChild(btn_delete);

    wrp.appendChild(wrp_p);
    wrp.appendChild(wrp_btn);

    resultMission.appendChild(wrp);

    // ======== Su kien delete ==========
    btn_delete.addEventListener('click', () => {
        wrp.remove(); // Xóa phần tử div khỏi tài liệu });
    });
    //============ End ===============

    // ======== Su kien Complete ==========
    let btn_cplete = false;
    btn_complete.addEventListener('click', () => {
        if (!btn_cplete) {
            btn_complete.innerHTML = 'Undo';
            p_mission.style.textDecoration = 'line-through';
            p_mission.style.color = '#8d979b';
            btn_cplete = true;
        } else {
            btn_complete.innerHTML = 'Complete';
            p_mission.style.textDecoration = 'none';
            p_mission.style.color = 'black';
            btn_cplete = false;
        }
    });
    // ============ End ===============

    // //============ Su kien edit ===============
    let btn_fix = false;
    let input_edit;
    btn_edit.addEventListener('click', () => {
        if (!btn_fix) {
            input_edit = document.createElement('input');
            wrp_p.replaceChild(input_edit, p_mission);
            // input_edit.style.width = '70%';
            input_edit.style.outline = 'none';
            input_edit.value = p_mission.innerHTML;
            input_edit.style.height = '50px';
            btn_edit.innerHTML = 'Save';
            btn_edit.style.backgroundColor = '#25a84b';
            btn_fix = true;
        } else {
            p_mission.innerHTML = input_edit.value;
            wrp_p.replaceChild(p_mission, input_edit);
            btn_edit.innerHTML = 'Edit';
            btn_edit.style.backgroundColor = '#fec107';
            btn_fix = false;
        }
    });

    //============ End ===============

    // }
});
