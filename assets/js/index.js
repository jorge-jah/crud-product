const tableData = document.getElementById("tableContent");

const btnAdd = document.getElementById('btnAdd');

const modalContent = document.getElementById('modal');

const products = [
    {
        nome: "Produto A",
        preco: 900.00,
        quantidade: 1,
    },
    {
        nome: "Produto C",
        preco: 756.00,
        quantidade: 1,
    },
    {
        nome: "Produto F",
        preco: 756.00,
        quantidade: 1,
    }
];

function formatDataToString(value) {
    const valorFormatado = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    return valorFormatado;
};

function contentHtml(nome, preco, produtoqtde, total) {
    const content = (tableData.innerHTML += `
    <tr class="even:bg-[#f2f2f2] odd:bg-white">
    <td class="p-3" id="nome">${nome}</td>
    <td class="p-3" id="preco">${preco}</td>
    <td class="p-3" id="quantidade">${produtoqtde}</td>
    <td class="p-3 text-center" id="total">${total}</td>
    </tr>`
    );

    return content;
}

function renderDataTable() {

    products.map((product) => {
        const preco = formatDataToString(product.preco);

        const total = product.preco * product.quantidade;
        const totalFormatado = formatDataToString(total);

        const data = contentHtml(product.nome, preco, product.quantidade, totalFormatado);

    return data;
    });

};

renderDataTable();


function openModal() {
    modalContent.classList.remove('hidden')
    modalContent.classList.add('flex')
}

btnAdd.addEventListener("click", openModal)



