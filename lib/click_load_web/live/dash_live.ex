defmodule Dash do
  defstruct [:name, :id]
end

defmodule ClickLoadWeb.DashLive.Main do
  use ClickLoadWeb, :live_view

  defstruct name: "dash", id: 1

  @dashes [%Dash{name: "José", id: 1}, %Dash{name: "Chris", id: 2}]

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, dash: %__MODULE__{}, dashes: @dashes)}
  end

  @inpl true
  def handle_params(params, _url, socket) do
    IO.inspect(params)
    {:noreply, socket}
  end
end
